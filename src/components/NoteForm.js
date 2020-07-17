import React from 'react'
import { Form, Button, Input } from 'antd';
import { createNote } from '../api'
import { toast } from 'react-toastify';

const NoteForm = ({ notes, setNotes }) => {

  const [form] = Form.useForm()

  const handleSubmit = (e) => {
    createNote(form.getFieldValue('note')).then(res => {
      const newNotesArray = notes.concat([res])
      setNotes(newNotesArray)
      toast.success('Added Successfully')
      form.resetFields()
    })
  }

  return (
    <Form form={form} name="create_note" style={{marginBottom: '25px'}} layout="horizontal" onFinish={handleSubmit}>
      <Form.Item name="note" rules={[{ required: true, message: 'Write some beautiful words...' }]}>
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

export default NoteForm;