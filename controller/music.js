import Music from '../model/music.js';
import mongoose from 'mongoose';

export async function getMusic(req, res) {
  try {
    const allMusic = await Music.find();
    return res.status(200).json({
      success: true,
      message: 'A list of all Music',
      data: allMusic,
    })
  } catch(err) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: err.message,
    });
  }
}

export async function createMusic(req, res) {
  try {
    const newMusic = new Music({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      musicUrl: req.body.musicUrl,
      artist: req.body.artist
    })
    await newMusic.save()
    res.status(200).json({
      success: true,
      message: 'create music successfully',
      data: newMusic,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again.',
      error: err.message,
    });
  }
}