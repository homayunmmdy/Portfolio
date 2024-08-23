const CodeMockup = ({ code }: { code: string }) => {
  return (
    <>
      <div className="mockup-code my-4 md:my-8 w-full lg:w-fit mx-auto">
        <pre data-prefix="$">
          <code>{code}</code>
        </pre>
      </div>
    </>
  );
};

export default CodeMockup;
