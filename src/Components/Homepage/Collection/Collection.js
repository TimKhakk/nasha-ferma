import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../../Default/Container";

const Collection = () => {
  return (
    <>
      <div className="coll">
        <Container>
          <div className="coll__row">
            <h2 className="coll__title">Овощи, фрукты</h2>

            <div className="colls">
              <Link to="/products">
                <motion.div whileTap={{ scale: 0.96 }} className="colls__item">
                  <img className="colls__item-img" src="vegs.png" alt="" />
                  <h3 className="colls__item-title">
                    Овощи
                    <br />
                    Грибы
                    <br />
                    Зелень
                    <br />
                  </h3>
                </motion.div>
              </Link>

              <Link to="/products">
                <motion.div whileTap={{ scale: 0.96 }} className="colls__item">
                  <img className="colls__item-img" src="fruits.png" alt="" />
                  <h3 className="colls__item-title">
                    Фрукты
                    <br />
                    Ягоды
                    <br />
                  </h3>
                </motion.div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Collection;
