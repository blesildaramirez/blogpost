'use strict';

import mongoose from 'mongoose';

var PostSchema = new mongoose.Schema({
  headline: String,
  opening: String,
  primaryImage: String,
  isActive: { type: Boolean, default: true },
  contents: [{
    header: String,
    content: String,
    image: String
  }],
  comments: [{
    commentedBy: String,
    createdAt: String,
    updatedAt: String
  }]
}, {
  timestamps: true
});

export default mongoose.model('Post', PostSchema);
