"use client";

import React, { useEffect, useState } from "react";
import { MessageSquare, Mail, Send } from "lucide-react";
import { getAllMessages, markMessageRead, replyToMessage } from "@/app/actions/server/message";

const Message = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    getAllMessages().then((data) => {
      setMessages(data);
      setLoading(false);
    });
  }, []);

  const handleOpenMessage = async (msg) => {
    if (msg.status === "unread") {
      await markMessageRead(msg._id)
      setMessages((prev) =>
        prev.map((m) => (m._id === msg._id ? { ...m, status: "read" } : m))
      );
    }
    setReplyingTo(msg)
    setReplyText("")
  };

  const handleSendReply = async () => {
    if (!replyText.trim()) return;
    setSending(true);
    await replyToMessage(replyingTo._id, replyingTo.email, replyingTo.subject, replyText);
    setMessages((prev) =>
      prev.map((m) => (m._id === replyingTo._id ? { ...m, status: "replied" } : m))
    );
    setSending(false);
    setReplyingTo(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-base-200 p-6 border border-base-300">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
            <MessageSquare className="text-primary" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Messages</h1>
            <p className="text-sm text-base-content/60 mt-1">
              User and guest messages submitted from the contact page.
            </p>
          </div>
        </div>
      </div>

      {/* Message List */}
      <div className="space-y-3">
        {messages.length === 0 && (
          <p className="text-center text-base-content/60 py-10">No messages yet.</p>
        )}

        {messages.map((m) => (
          <div
            key={m._id}
            onClick={() => handleOpenMessage(m)}
            className={`p-4 rounded-xl border cursor-pointer transition-colors ${
              m.status === "unread"
                ? "border-primary bg-primary/5"
                : "border-base-300 bg-base-100"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-semibold">{m.name} <span className="text-xs font-normal text-base-content/50">({m.email})</span></p>
                <p className="text-sm text-primary mt-0.5">{m.subject}</p>
              </div>
              <span
                className={`badge badge-sm ${
                  m.status === "unread"
                    ? "badge-primary"
                    : m.status === "replied"
                    ? "badge-success"
                    : "badge-ghost"
                }`}
              >
                {m.status}
              </span>
            </div>
            <p className="text-sm mt-2 text-base-content/70 line-clamp-2">{m.message}</p>
          </div>
        ))}
      </div>

      {/* Reply Modal */}
      {replyingTo && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-base-100 rounded-2xl p-6 w-full max-w-lg space-y-4">
            <div>
              <h3 className="font-bold text-lg">{replyingTo.subject}</h3>
              <p className="text-sm text-base-content/60">
                From: {replyingTo.name} ({replyingTo.email})
              </p>
            </div>

            <div className="p-3 bg-base-200 rounded-xl text-sm">{replyingTo.message}</div>

            <textarea
              rows={5}
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply..."
              className="textarea textarea-bordered w-full"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setReplyingTo(null)}
                className="btn btn-ghost btn-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSendReply}
                disabled={sending}
                className="btn btn-primary btn-sm gap-1"
              >
                {sending ? "Sending..." : <>Send Reply <Send size={14} /></>}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Message;