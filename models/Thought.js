const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  reactionText: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  },

  {
      toJSON: {
          virtuals: true,
          getters: true
      },
      id: false
  }
);
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
    },
    
    userName: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    
    reactions: [
      ReactionSchema
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

//TODO add virtual get to return reaction count

const thought = model('thought', thoughtSchema);

module.exports = thought;
