export const EndpointBadge = ({ method = "GET", children }) => {
  const METHOD_STYLES = {
    GET: {
      bg: "mint-bg-[#2AB673]",
    },
    POST: {
      bg: "mint-bg-[#3064E3]",
    },
    PUT: {
      bg: "mint-bg-[#C28C30]",
    },
    PATCH: {
      bg: "mint-bg-[#DA622B]",
    },
    DELETE: {
      bg: "mint-bg-[#CB3A32]",
    },
    API: {
      bg: "mint-bg-black",
    },
  };
  const key = method.toUpperCase();
  const styles = METHOD_STYLES[key] ?? METHOD_STYLES.API;

  return (
    <div className="relative mt-7">
      <span
        className={`absolute -top-2 -left-2 z-10 ${styles.bg} text-white px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide`}
      >
        {key}
      </span>
      {children}
    </div>
  );
};
