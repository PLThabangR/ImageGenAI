import {Router} from 'express';
import * as dotenv from 'dotenv';
import  Configuration from 'openai';
import  OpenAIApi from 'openai';

dotenv.config();
const OPENAI_KEY_API="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"
const router = Router();

const configuration = new Configuration({
  apiKey: OPENAI_KEY_API,
});

const openai = new OpenAIApi(configuration);

//Route testing
router.route('/').get((req, res) => {
  res.status(200).json({ message: 'Hello from DALL-E!' });
});

router.route('/').post(async (req, res) => {
  
  try {
    const { prompt } = req.body;

    const aiResponse = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });
    //
    const image = aiResponse.data.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
  //  res.status(500).send(error?.response.data.error.message || 'Something went wrong');
  }
});

export default router;