import '@logseq/libs'



console.log('=== logseq-plugin-react-boilerplate loaded ===')
logseq.ready(() => {

  logseq.Editor.registerBlockContextMenuItem('move-block', (e) => {
    const pageUuid = '626b1f0d-e86e-4ffd-b99a-d79fb8650fcb'
    return logseq.Editor.moveBlock(e.uuid, pageUuid)
  })

})
