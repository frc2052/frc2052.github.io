# Object Detection Steps and Resources

Updated 2/16/2026

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