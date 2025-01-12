import MainArticle from "../../components/main/MainArticle";
import OfferForm from "../../components/offer-form/OfferForm";
import HorizontalPanelBig from "../../components/panel/HorizontalPanelBig";



const Offer: React.FC = () => {
    return (
        <HorizontalPanelBig>
            <MainArticle heading="Požadavek">
            <p>Pro odeslání požadavku budete muset povolit sdílení polohy.</p>
            </MainArticle>
            <OfferForm/>
        </HorizontalPanelBig>

    );
    }
export default Offer;
