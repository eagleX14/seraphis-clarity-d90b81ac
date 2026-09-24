import { useEffect } from "react";

type JsonLd = Record<string, unknown>;

const StructuredData = ({ id, data }: { id: string; data: JsonLd }) => {
  useEffect(() => {
    const scriptId = `structured-data-${id}`;
    document.getElementById(scriptId)?.remove();

    const script = document.createElement("script");
    script.id = scriptId;
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => script.remove();
  }, [id, data]);

  return null;
};

export default StructuredData;
