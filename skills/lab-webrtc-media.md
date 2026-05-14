# Frontend Lab - WebRTC Media Experiments

## 能力
- 在前端实验室中提供三个 WebRTC 实验：摄像头拍照、摄像头录制、P2P 点对点通信。
- 摄像头拍照页通过 `navigator.mediaDevices.getUserMedia` 获取视频流，并用 Canvas 将当前视频帧导出为 PNG。
- 摄像头录制页通过 `getUserMedia` 获取音视频流，并用 `MediaRecorder` 在浏览器本地录制、回放和下载 WebM 视频。
- P2P 通信页通过两个 `RTCPeerConnection` 在本页内模拟 Local Peer 与 Remote Peer，完成 offer / answer、ICE 候选交换，并通过 `RTCDataChannel` 发送消息。

## 页面入口
- `/lab/webrtc-take-photos`：WebRTC 摄像头拍照实验。
- `/lab/webrtc-record`：WebRTC 摄像头录制实验。
- `/lab/webrtc-p2p`：WebRTC P2P 点对点通信实验。
- `/lab`：通过 `src/data/hub.ts` 的 `labs` 数组展示实验入口卡片。

## 使用到的数据或接口
- 本地数据：`src/data/hub.ts` 中的 `labs`。
- 浏览器媒体接口：`navigator.mediaDevices.getUserMedia`、`CanvasRenderingContext2D.drawImage`、`HTMLCanvasElement.toDataURL`、`MediaRecorder`、`URL.createObjectURL`。
- 浏览器实时通信接口：`RTCPeerConnection`、`RTCDataChannel`、`createOffer`、`createAnswer`、`setLocalDescription`、`setRemoteDescription`、`addIceCandidate`。
- 不依赖后端接口；照片、视频和 P2P 消息均只在用户浏览器本地生成或传递。

## 相关文件
- `src/pages/lab/webrtc-take-photos.astro`
- `src/pages/lab/webrtc-record.astro`
- `src/pages/lab/webrtc-p2p.astro`
- `src/data/hub.ts`
