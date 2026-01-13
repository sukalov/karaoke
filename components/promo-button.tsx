import { Button } from "./ui/button";

const PromoButton = () => {
    const showPromo = process.env.NEXT_PUBLIC_SHOW_PROMO === "true";
    const promoText = process.env.NEXT_PUBLIC_PROMO_TEXT || "🔥 мы продаёмся 🔥";
    const promoUrl = process.env.NEXT_PUBLIC_PROMO_URL || "https://karaoke.gastroli.moscow";

    if (!showPromo) return null;

    return (
        <Button
            className="fixed bottom-12 right-4 z-50 shadow-lg animate-bounce"
            onClick={() => window.open(promoUrl, "_blank")}
        >
            {promoText}
        </Button>
    );
};

export default PromoButton;
