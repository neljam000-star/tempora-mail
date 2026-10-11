"use client";

import { useEffect, useMemo, useState } from "react";

type Message = { id: number; from: string; subject: string; preview: string; body: string; time: string };

export default function Home() {
  const [address, setAddress] = useState("");
  const [seconds, setSeconds] = useState(600);
  const [dark, setDark] = useState(false);
  const [selected, setSelected] = useState<Message | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [notice, setNotice] = useState("Demo mode: real incoming email is not connected yet.");

  const makeAddress = () => {
    const chars = "abcdefghjkmnpqrstuvwxyz23456789";
    const name = Array.from({ length: 10 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    setAddress(`${name}@your-domain.example`);
    setSeconds(600);
    setMessages([]);
    setSelected(null);
    setNotice("Demo address created. Configure an owned domain and inbound email provider to receive real mail.");
  };

  useEffect(() => { makeAddress(); }, []);
  useEffect(() => {
    const timer = setInterval(() => setSeconds(s => Math.max(0, s - 1)), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeLabel = useMemo(() => `${String(Math.floor(seconds / 60)).padStart(2,"0")}:${String(seconds % 60).padStart(2,"0")}`, [seconds]);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(address);
      setNotice("Address copied.");
    } catch {
      setNotice("Copy isn't available in this browser. Press and hold the address to copy it.");
    }
  }

  return (
    <main className={dark ? "site dark" : "site"}>
      <header className="topbar">
        <a className="brand" href="#"><span className="logo">✉</span><span>Tempora <b>Mail</b><small>Fast. Private. Temporary.</small></span></a>
        <nav><a href="#home">Home</a><a href="#how">How It Works</a><a href="#faq">FAQ</a><a href="#privacy">Privacy</a></nav>
        <button className="theme" onClick={() => setDark(v => !v)} aria-label="Toggle color theme">{dark ? "☀️" : "🌙"}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy"><div className="eyebrow">INSTANT · NO SIGN-UP</div><h1>Your Temporary<br/><span>Email Address</span></h1><p>Get a disposable email address for quick, low-risk sign-ups. No account required.</p></div>
        <div className="mail-art" aria-hidden="true">✉</div>
      </section>

      <section className="address-card">
        <label htmlFor="address">Your temporary email address</label>
        <div className="address-row"><input id="address" value={address} readOnly onFocus={e => e.currentTarget.select()} /><button onClick={copyAddress}>Copy</button></div>
        <div className="actions"><button className="primary" onClick={makeAddress}>＋ Generate New Email</button><button onClick={() => setNotice("Inbox refreshed. This demo has no live email provider connected.")}>↻ Refresh Inbox</button></div>
        <div className="timer">◷ Expires in <strong>{timeLabel}</strong></div>
        <p className="notice" role="status">{notice}</p>
      </section>

      <section className="inbox">
        <div className="section-head"><div><h2>Inbox</h2><p>Messages delivered to this address will appear here once email infrastructure is connected.</p></div><span className="pill">DEMO MODE</span></div>
        {selected ? <article className="message-detail"><button className="back" onClick={() => setSelected(null)}>← Back to inbox</button><h3>{selected.subject}</h3><p>From: {selected.from}</p><p>{selected.body}</p></article> :
          messages.length ? <div className="message-list">{messages.map(m => <button className="message" key={m.id} onClick={() => setSelected(m)}><b>{m.from}</b><strong>{m.subject}</strong><span>{m.preview}</span><small>{m.time}</small></button>)}</div> :
          <div className="empty"><div className="empty-icon">↙</div><h3>Your inbox is empty</h3><p>No messages yet. Real message receiving will work after you connect an inbound email provider.</p></div>}
      </section>

      <section className="info-grid" id="how"><article><h3>How it works</h3><p>Generate an address, copy it, and check the inbox. This deployment currently provides the interface only.</p></article><article id="faq"><h3>Frequently asked questions</h3><p><b>Can it receive real emails?</b><br/>Not yet. You must configure a domain, MX records, an inbound email service, and a secure backend.</p></article><article id="privacy"><h3>Privacy & safety</h3><p>Do not use temporary inboxes for passwords, financial accounts, or confidential communications. This demo stores no received messages.</p></article></section>
      <footer>© 2026 Tempora Mail · Demo mode — real email delivery not configured.</footer>
    </main>
  );
}
