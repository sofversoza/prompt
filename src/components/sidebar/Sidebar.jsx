import Search from '../search/Search'
import './Sidebar.css'

export default function Sidebar() {
  const tags = ['classics', 'memoir', 'feminist', 'gothic', 'dark academia', 'poems']

  return (
    <div className="sidebar">
      <div className="sidebar-search">
        <Search />
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Trending Prompts</span>
        <div>
          <p>Sofia Versoza</p>
          <h6>This is my prompt number 5: Titled I dont know</h6>
        </div>
        <div>
          <p>Sejo Basic</p>
          <h6>Something about Music I guess lorem ieurf</h6>
        </div>
        <div>
          <p>Lola Bobita</p>
          <h6>Do I look like I give two craps? Maybe one</h6>
        </div>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Recent Tags</span>
        <div className="chiptags">
          {tags.map(tag => (
              <a href="" key={tag}>{tag}</a>
          ))}
        </div>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Recent Prompts</span>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Recently Bookmarked</span>
      </div>
    </div>
  )
}
