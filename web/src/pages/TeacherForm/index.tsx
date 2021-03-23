import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import Textarea from '../../components/Textarea';

function TeacherForm() {
  return (
    <div id="page-teacher-form" className="container">
    <PageHeader 
      title="Que incrível que você quer dar aulas."
      description="O primeiro passo é preencher o formulário de inscrição"
    />

    <main>
      <fieldset>
        <legend>Seus Dados</legend>

        <Input name="name" label="Nome completo"/>
        <Input name="avatar" label="Avatar"/>
        <Input name="whatsapp" label="Whatsapp"/>
      </fieldset>

      <fieldset>
        <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria"/>
          <Input name="cost" label="Custa da sua hora por aula"/>
          <Textarea name="bio" label="Biografia" />
      </fieldset>

      <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante"/>
              Importante! <br />
              preencha todos os dados
            </p>
            <button type="submit">
              Salvar cadastro
            </button>
          </footer>
    </main>   
  </div>
  )
}

export default TeacherForm;