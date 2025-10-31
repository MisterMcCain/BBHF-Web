import React, { useEffect, useRef } from "react";

const Comments = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "MisterMcCain/BBHF-Web");
    script.setAttribute("data-repo-id", "R_kgDOQKpvmw");
    script.setAttribute("data-category", "Kommentare");
    script.setAttribute("data-category-id", "DIC_kwDOQKpvm84CxTr0");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "de");
    script.setAttribute("crossorigin", "anonymous");
    script.async = true;

    // 🧹 Verhindert mehrfaches Laden
    containerRef.current.innerHTML = "";
    containerRef.current.appendChild(script);

    return () => {
      containerRef.current.innerHTML = "";
    };
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-20 border-t border-slate-700/60 pt-8">
      <h2 className="text-center text-xl font-semibold text-slate-200 mb-6 flex items-center justify-center gap-2">
        <span role="img" aria-label="speech">💬</span> Kommentare der Community
      </h2>
      <div ref={containerRef} />
    </div>
  );
};

export default Comments;
