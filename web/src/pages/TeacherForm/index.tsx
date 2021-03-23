import React from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';

import './styles.css';

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
      </fieldset>
    </main>   
  </div>
  )
}

export default TeacherForm;