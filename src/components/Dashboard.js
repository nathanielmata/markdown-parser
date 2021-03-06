import React from 'react';

class Dashboard extends React.Component {
  formatDate = (date) => {
    const ms = (Date.now() - Date.parse(date));
    const days = Math.floor(ms/1000/60/60/24);
    return days.toString() + " days ago";
  }

  render() {
    return (
      <div className="main__dashboard">
        <h1>Latest Notes</h1>
        <div className="main__dashboard--inner">
          {this.props.notes.map((note, idx) => {
              return (
                <div 
                  className="main__dashboard--card"
                  key={idx}>
                    <a href={`/note/${note.id}`}>
                      <div className="main__dashboard--card-name">{note.title}</div>
                      <div className="main__dashboard--card-date">
                        Edited {this.formatDate(note.updated_at)}
                      </div>
                    </a>
                </div>
              )
          })}
        </div>
      </div>
    )
  }
};

export default Dashboard