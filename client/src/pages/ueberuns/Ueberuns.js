import FooterEnd from "../../components/footerEnd/FooterEnd";
import Footer from "../../components/footer/Footer";



const Ueberuns = () => {
  return (
    <>
      <section className="ueberuns-Sec">
        <div className="content">
          <h1>Unser Projekt</h1>
          <article>
            <p>
              ”Nothingtotrash” ist eine Website um gebrauchte Gegenstände zu
              verschenken oder für wenig Geld zu verkaufen.
            </p>
          </article>
        </div>
        <img
          src="https://cdn.pixabay.com/photo/2020/06/24/05/29/tree-5334822_1280.png"
          alt=""
        />
      </section>
      <h2>NothingToTrash Team</h2>
	
      <section className="card">
        <h4>- Fantastic4 | Mercedes, Waldi, Daniel, Michael - </h4>
		<h5>2023_rebuild_michaelsuperCode_revised &#9825; version</h5>
      </section>
      <Footer />
      <FooterEnd />
    </>
  );
};
export default Ueberuns;