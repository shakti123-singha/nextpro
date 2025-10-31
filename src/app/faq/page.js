export default function page() {
  const faqs = [
    { q: "What services do you offer?", a: "We provide digital marketing, branding, and campaign management." },
    { q: "How can I contact support?", a: "Use the contact form on the Contact page or email support@adshastree.com." },
  ];

  return (
    <section className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">FAQs</h1>
      <div className="space-y-4">
        {faqs.map((item, idx) => (
          <div key={idx} className="border-b pb-4">
            <h3 className="font-semibold text-lg">{item.q}</h3>
            <p className="text-black mt-1">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
