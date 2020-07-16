import React from 'react'
import { Form, Button, Input } from 'antd';
import { createNote } from '../api'
import { toast } from 'react-toastify';

const NoteForm = ({ notes, setNotes }) => {

  //const { validateFields, resetFields } = form;
  const [form] = Form.useForm()

  function handleSubmit(e) {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err && values.note) {
        createNote(values.note).then(res => {
          const newNotesArray = notes.concat([res])
          setNotes(newNotesArray)
          console.success('it worked')
          toast.success('Added Successfully')
          form.resetFields()
        })
      }
    });
  }
  
  
  return (
    <Form style={{marginBottom: '25px'}} layout="horizontal" onSubmit={handleSubmit}>
      <Form.Item rules={[{ required: true }]}>
          <Input
            className="note-input"
            size="large"
            placeholder="Add New Note"
          />
      </Form.Item>
      <Button htmlType="submit">Create</Button>

  </Form>
  )
}

//const WrappedNoteForm = Form.create({name: 'notes_form'})(NoteForm)

export default NoteForm;