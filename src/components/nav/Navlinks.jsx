import './Navlinks.css'

export default function Navlinks() {
  const links = ['For you', 'Gratitude','Poems', 'Photos', 'Plays', 'Love Letter', 'Literary Analysis', 'Persuasive', 'Expository', 'Narrative' ]

  return (
    <div className="navlinks">
      {links.map(l => (
        <ul key={l}>
          <li>{l}</li>
        </ul>
      ))}
    </div>
  )
}
