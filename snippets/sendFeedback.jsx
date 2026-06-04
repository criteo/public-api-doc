export const SendFeedback = ({ pageUrl = "" }) => {
  return (
    <form
      method="GET"
      action="https://docs.google.com/forms/d/e/1FAIpQLScMzp6pwIf0fD3oFqsrxeSAzbPpJubqRc0j-0eDNZXV6YrhlA/viewform"
      target="_blank"
      onSubmit={(event) => {
        const pageUrlField = event.currentTarget.elements["entry.1826646601"];

        if (pageUrlField && typeof window !== "undefined") {
          pageUrlField.value = window.location.href;
        }
      }}
      style={{
        margin: "1.5rem 0",
        maxWidth: "36rem",
      }}
    >
      <p
        style={{
          margin: "0 0 0.75rem",
          color: "#111827",
          fontSize: "0.95rem",
          fontWeight: 500,
          lineHeight: 1.4,
        }}
      >
        Did anything feel unclear or missing on this page?
      </p>

      <textarea
        name="entry.1142744791"
        rows={3}
        placeholder="What should we improve?"
        style={{
          boxSizing: "border-box",
          display: "block",
          width: "100%",
          margin: "0 0 0.5rem",
          padding: "0.5rem 0.75rem",
          border: "1px solid #d8dee4",
          borderRadius: "0.375rem",
          background: "#ffffff",
          color: "#111827",
          font: "inherit",
          fontSize: "0.875rem",
          lineHeight: 1.5,
          resize: "vertical",
        }}
      />

      <input type="hidden" name="usp" value="pp_url" />
      <input type="hidden" name="entry.1826646601" value={pageUrl} />

      <button
        type="submit"
        style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "0.375rem 0.875rem",
          border: "1px solid #d8dee4",
          borderRadius: "0.375rem",
          background: "#f3f4f6",
          color: "#0047ff",
          cursor: "pointer",
          font: "inherit",
          fontSize: "0.875rem",
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        Send feedback
      </button>
    </form>
  );
};

export default SendFeedback;
