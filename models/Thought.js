const { Schema, model } = require('mongoose');

const ReactionSchema = new Schema({
  reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
  },
  reactionBody: {
      type: String,
      required: true,
      maxlength: 280
  },
  username: {
      type: String,
      required: true
  },
  createdAt: {
    type:Date,default:Date.now
  }
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
