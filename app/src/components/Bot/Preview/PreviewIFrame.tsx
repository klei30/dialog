import React from "react";

type Props = {
  public_id: string;
};

export const PreviewIframe = ({ public_id }: Props) => {
  const [hostUrl] = React.useState<string>(
    () =>
      import.meta.env.VITE_HOST_URL ||
      window.location.protocol + "//" + window.location.host
  );
  return (
    <>
      <div>
        <iframe
          src={`${hostUrl}/bot/${public_id}?mode=iframe`}
          className="w-full bg-white"
          height={600}
          title="Dialoqbase"
        />
      </div>
    </>
  );
};
