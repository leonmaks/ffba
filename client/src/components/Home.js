import React from 'react'

export default () => {
  return (
    <div>
      <iframe
        id='forum_embed'
        title="myFrame"
        src='javascript:void(0)'
        scrolling='no'
        frameborder='0'
        width='900'
        height='700'
      />
      <script type='text/javascript'>
        document.getElementById('forum_embed').src =
        'https://groups.google.com/forum/embed/?place=forum/elta-cafe' +
        '&showsearch=true&showpopout=true&showtabs=false' + '&parenturl=' +
        encodeURIComponent(window.location.href);
      </script>{' '}
    </div>
  )
}
