import './index.scss'

export default function Checkbox({
  keyId,
  checked = false,
  onChange,
}: {
  keyId: string
  checked?: boolean
  onChange: (checked: boolean) => void
}) {
  return (
    <div className="checkbox">
      <input
        className="inp-cbx"
        id={keyId}
        type="checkbox"
        style={{ display: 'none' }}
        checked={checked}
        onChange={(event) => {
          onChange(event.target.checked)
        }}
      />
      <label className="cbx" htmlFor={keyId}>
        <span className="cbx-svg">
          <svg width="12px" height="9px" viewBox="0 0 12 9">
            <polyline points="1 5 4 8 11 1"></polyline>
          </svg>
        </span>
      </label>
    </div>
  )
}
