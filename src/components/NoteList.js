import React, { memo } from 'react'
import { Button } from 'antd'
import { DeleteTwoTone} from '@ant-design/icons'

const NoteList = memo(({data, onRemove, onEdit}) => (
    <>
    {data && data.map(note => (
        <div key={note.ref.id} className="note-row">
            <p
                contentEditable
                suppressContentEditableWarning
                onChange={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
                onBlur={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
                onInput={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
                >
                    {note.data.text}
            </p>
            <Button
                danger
                onClick={(e) => onRemove(e, note.ref.id)}
                style={{ cursor: "pointer", fontSize: '16px'}}
                type="text"
                icon={<DeleteTwoTone twoToneColor="#DA0D0D"/>}
            />
        </div>
    ))}
    </>
))

export default NoteList;
