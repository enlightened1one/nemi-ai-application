import React from 'react'

function ContentView({ selected }) {
  if (selected === "analytics") return <div>Analytics content</div>;
  if (selected === "settings") return <div>Settings content</div>;
  return <div>Overview content</div>;
}

export default ContentView


// export default function ContentView
