import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const injectId = "botpress-inject";
    const configId = "botpress-config";

    if (document.getElementById(injectId)) return;

    const injectScript = document.createElement("script");
    injectScript.id = injectId;
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.5/inject.js";
    injectScript.async = true;

    injectScript.onload = () => {
      const configScript = document.createElement("script");
      configScript.id = configId;
      configScript.src = "https://files.bpcontent.cloud/2025/12/29/21/20251229212511-ZKHCQN9N.js";
      configScript.defer = true;
      document.body.appendChild(configScript);
    };

    injectScript.onerror = () => {
      console.error("Failed to load Botpress inject script.");
    };

    document.body.appendChild(injectScript);

    return () => {
      const s1 = document.getElementById(injectId);
      const s2 = document.getElementById(configId);
      if (s1) document.body.removeChild(s1);
      if (s2) document.body.removeChild(s2);
      
      const botpressContainer = document.getElementById("bp-web-widget-container");
      if (botpressContainer) {
        botpressContainer.style.display = "none";
      }
    };
  }, []);

  return null;
};

export default Chatbot;