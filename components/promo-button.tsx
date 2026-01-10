import { Button } from "./ui/button";

const PromoButton = () => {
  const showPromo = process.env.NEXT_PUBLIC_SHOW_PROMO === "true";

  if (!showPromo) return null;

  return (
    <Button
      className="fixed bottom-20 right-4 z-50 shadow-lg animate-bounce"
      size="sm"
      onClick={() => window.open("https://karaoke.gastroli.moscow", "_blank")}
    >
      мы продаёмся 🔥
    </Button>
  );
};

export default PromoButton;
