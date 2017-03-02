export default {
  words: {
    byId: {
      1: {
        id: 1,
        blockId: 1,
        text: 'first'
      },
      2: {
        id: 2,
        blockId: 1,
        text: 'second'
      },
      3: {
        id: 3,
        blockId: 2,
        text: 'other'
      },
      4: {
        id: 4,
        blockId: 2,
        text: 'someone'
      }
    },
    allIds: [1,2,3,4]
  },
  blocks: {
    byId: {
      1: {
        id: 1,
        words: [1,2]
      },
      2: {
        id: 2,
        words: [3,4]
      }
    },
    allIds: [1,2]
  },
  input: { text: '' }
};
