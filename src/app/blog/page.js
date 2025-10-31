export default function Blog() {
  const posts = [
    { title: "How to Build a Digital Strategy", date: "Sep 25, 2025" },
    { title: "Top 5 Marketing Trends", date: "Aug 20, 2025" },
  ];

  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-black">Blog</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((p, idx) => (
          <div key={idx} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{p.title}</h3>
            <p className="text-sm text-gray-500">{p.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
