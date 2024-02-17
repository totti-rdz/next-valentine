import Button from "@/components/Button";

type Props = {
  link: string;
};

const ShareButton = ({ link }: Props) => {
  const label = "Share";

  const shareLink = () => {
    if (navigator.share) {
      navigator
        .share({
          url: link,
        })
        .then(() => console.info("Successful share"))
        .catch((error) => {
          alert("Error sharing");
          console.error(error);
        });
    } else {
      const isMobileOrTablet = /(android|iphone|ipad|mobile)/i.test(
        navigator.userAgent,
      );
      const whatsappUrl =
        "https://" +
        (isMobileOrTablet ? "api" : "web") +
        ".whatsapp.com/send?text=" +
        encodeURI("Join our game:") +
        "%0a%0a" +
        link;
      window.open(whatsappUrl, "_blank", "noreferrer");
    }
  };

  return <Button onClick={shareLink}>{label}</Button>;
};

export default ShareButton;
