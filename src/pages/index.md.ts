import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Harry Rebesco

Full stack web developer with 6 years of experience, based in Maitland, NSW, Australia, specialising in Django applications.

## Navigation

- [About](/about.md)
- [Recent Posts](/posts.md)
- [Archives](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- GitHub: [@harrisonrebesco](https://github.com/harrisonrebesco)
- LinkedIn: [harrisonrebesco](https://www.linkedin.com/in/harrisonrebesco/)
- Email: hrebesco@live.com.au

---

*This is the markdown-only version of harry.rebes.co. Visit [harry.rebes.co](https://harry.rebes.co) for the full experience.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
