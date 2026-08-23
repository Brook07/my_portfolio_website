import { useEffect } from "react";

const Webring = () => {
  useEffect(() => {
    const scriptSrc = "https://ringring.rajatdahal.com.np/webring.js";
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    // Re-run the script when this component is mounted so it targets this
    // placeholder after page navigation or a hot reload.
    existingScript?.remove();

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return <div id="webring" />;
};

export default Webring;
