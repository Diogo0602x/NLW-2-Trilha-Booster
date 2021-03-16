import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem () {
  return (
    <article className="teacher-item">
            <header>
              <img src="https://avatars.githubusercontent.com/u/72995630?s=460&u=abddd331b434d99a65708d972b9a2b643d49baa8&v=4" alt="Diogo Sales "/>
              <div>
                <strong>Diogo Sales</strong>
                <span>Química</span>
              </div>
            </header>

            <p>
              Entusiasta das melhores tecnologias de química avançada.
              <br/><br/>
              Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
              <p>
                Preço/hora
                <strong>R$: 100,00</strong>
              </p>
              <button type="button">
                <img src={whatsappIcon} alt="Whatsapp"/>
                Entrar em contato
              </button>
            </footer>
    </article>
  );
}

export default TeacherItem;