export default function Layout({
    children, className // will be a page or nested layout
}) {
    return (
      <section className={className}>
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </section>
    );
  }