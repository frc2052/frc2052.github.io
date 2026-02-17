# Object Detection Steps and Resources

[Limelight documentation for training a model](https://docs.limelightvision.io/docs/docs-limelight/pipeline-neural/training-your-own-detector)

- Read through this for steps  
- Look @ Roboflow Universe for models  
- Figure out how to combine them??

[Where to upload the model](https://tools.limelightvision.io/neural-network-trainer)  \- once you have all your annotated date

1. What is object detection & how have we used it in the past  
2. Find models on [RoboFlow Universe](https://universe.roboflow.com/)  
   1. What makes a good model  
      1. Variety of images \- different contexts  
3. [Converting COCO JSON to Tensorflow TF Record](https://roboflow.com/convert/coco-json-to-tensorflow-tfrecord)  
   1. Step 1: set up the project  
   2. Step 2: upload your data to the project  
      1. Download the models you found as .coco files  
      2. Upload data to the model → move in the coco files & upload them to the dataset  
   3. Step 3 dataset version  
      1. Auto orient  
      2. Resize  
      3. grayscale   
      4. ![][image1]  
   4. Step 4  
      1. Add 90 degree rotation  
      2. Add \+ & \- 15 degree brightness  
   5. Download tensorflow tf record  
4. Now you’ve created a new version  
5. Upload final [TF Record model](https://tools.limelightvision.io/neural-network-trainer) \<- TO THIS LINK  
   1. Train the model (takes some time)  
   2. When done, you get a tf.white file  
6. Add to the code \- follow [Upload to Limelight step HERE](https://docs.limelightvision.io/docs/docs-limelight/pipeline-neural/training-your-own-detector)  
7. 7.5 Detector Results → use API call to grab the location information  
8. Look HERE (2024 Crescendo) for an example of a [Game Piece Alignment Command](https://github.com/frc2052/2024-Crescendo/blob/main/src/main/java/frc/robot/commands/drive/GamePieceAlignmentCommand.java)

[image1]: <data:image/png;base64,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>