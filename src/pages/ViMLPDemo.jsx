import React from 'react';
import { AUDIO_PATHS } from '../assets/assets';

const ViMLPDemo = () => {
  const AudioPlayer = ({ src }) => (
    <audio controls className="block my-4">
      <source src={src} type="audio/wav" />
      Your browser does not support the audio element.
    </audio>
  );

  return (
    <div className="font-sans leading-relaxed m-5 text-black">

      <h1 className="text-center text-[#8a1a1a] text-3xl mb-6">ViMLP Muong-Vietnamese Demo Page</h1>
      <hr className="my-5 h-px bg-gray-200 border-0" />

      <section>
        <h2 className="text-[#11497e] text-2xl border-l-4 border-[#16435f] pl-3 mb-3">
          I. Samples of ViMLP Dataset
        </h2>

        <div className="mb-8">
          <h4 className="text-[#11497e] text-lg mb-2">Case 1</h4>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample3} />
          <p>
            <span className="text-[#254f5a] font-bold">Target:</span> Là người con sinh ra và lớn lên ở vùng đất giàu truyền thống văn hóa Mường ở xóm Xê, xã Ngọc Lâu, huyện Lạc Sơn.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-[#11497e] text-lg mb-2">Case 2</h4>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample1} />
          <p>
            <span className="text-[#254f5a] font-bold">Target:</span> Trong những năm qua phong trào nông dân thi đua sản xuất kinh doanh giỏi giúp nhau làm giàu và giảm nghèo bền vững luôn được các cấp Hội nông dân trên địa bàn tỉnh quan tâm, tổ chức thực hiện.
          </p>
        </div>

        <div className="mb-8">
          <h4 className="text-[#11497e] text-lg mb-2">Case 3</h4>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample2} />
          <p>
            <span className="text-[#254f5a] font-bold">Target:</span> Phần cuối chương trình ngày hôm nay chúng tôi xin mời quý vị và các bạn cùng đến với những hoạt động ý nghĩa này của ông qua phóng sự sau.
          </p>
        </div>
      </section>

      <hr className="my-5 h-px bg-gray-200 border-0" />

      <section>
        <h2 className="text-[#11497e] text-2xl border-l-4 border-[#16435f] pl-3 mb-3">
          II. Examples of Data Augmentation
        </h2>

        <div className="mb-8">
          <h3 className="text-[#11497e] text-xl mb-3">1. Audio Stretching</h3>
          <p>
            <span className="text-[#254f5a] font-bold">Target:</span> Phần cuối chương trình ngày hôm nay chúng tôi xin mời quý vị và các bạn cùng đến với những hoạt động ý nghĩa này của ông qua phóng sự sau.
          </p>

          <p className="text-[#254f5a] font-bold mt-4">Original Audio:</p>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample2} />

          <p className="text-[#254f5a] font-bold">Augmented Audio:</p>
          <p className="bg-[#ecf0f1] p-1 border-l-4 border-[#1d5377] text-sm">
            <span className="text-[#5e6668] italic">Hệ số kéo dãn: 1.2</span>
          </p>
          <AudioPlayer src={AUDIO_PATHS.audioStretching.sample2} />

          <p className="bg-[#ecf0f1] p-1 border-l-4 border-[#1d5377] text-sm">
            <span className="text-[#5e6668] italic">Hệ số kéo dãn: 0.8</span>
          </p>
          <AudioPlayer src={AUDIO_PATHS.audioStretching.sample2_08} />
        </div>

        <div className="mb-8">
          <h3 className="text-[#11497e] text-xl mb-3">2. Additive Noise</h3>
          <p>
            <span className="text-[#254f5a] font-bold">Target:</span> Là người con sinh ra và lớn lên ở vùng đất giàu truyền thống văn hóa Mường ở xóm Xê, xã Ngọc Lâu, huyện Lạc Sơn.
          </p>

          <p className="text-[#254f5a] font-bold mt-4">Original Audio:</p>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample3} />

          <p className="text-[#254f5a] font-bold">Augmented Audio:</p>
          <p className="bg-[#ecf0f1] p-1 border-l-4 border-[#1d5377] text-sm">
            <span className="text-[#5e6668] italic">Hệ số nhiễu: 0.0082</span>
          </p>
          <AudioPlayer src={AUDIO_PATHS.additiveNoise.sample3} />
        </div>

        <div className="mb-8">
          <h3 className="text-[#11497e] text-xl mb-3">3. Paraphrasing</h3>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample2} />
          <p>
            <span className="text-[#254f5a] font-bold">Target:</span> Phần cuối chương trình ngày hôm nay chúng tôi xin mời quý vị và các bạn cùng đến với những hoạt động ý nghĩa này của ông qua phóng sự sau.
          </p>
          <p>
            <span className="text-[#254f5a] font-bold">Paraphrasing: </span>
            <span className="text-[#a81616]">Kết thúc chương trình ngày hôm nay, chúng tôi mời quý vị và các bạn cùng theo dõi những hoạt động đầy ý nghĩa này của ông qua phóng sự dưới đây.</span>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[#11497e] text-xl mb-3">4. Back-translation</h3>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample2} />
          <p>
            <span className="text-[#254f5a] font-bold">Target:</span> Phần cuối chương trình ngày hôm nay chúng tôi xin mời quý vị và các bạn cùng đến với những hoạt động ý nghĩa này của ông qua phóng sự sau.
          </p>
          <p className="text-[#254f5a] font-bold">Back-translation:</p>
          <p className="ml-6 text-[#077a63]">
            * En: <span className="text-[#5e6668] italic">At the end of today's program we invite you to join us in his meaningful activities in the following report.</span>
          </p>
          <p className="ml-6 text-[#077a63]">
            * Vi: <span className="text-[#5e6668] italic"><span className="text-[#a81616]">Kết thúc chương trình hôm nay, chúng tôi xin trân trọng mời quý vị cùng tham gia những hoạt động ý nghĩa này của ông thông qua báo cáo sau đây.</span></span>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-[#11497e] text-xl mb-3">5. BT4ST</h3>
          <p>
            <span className="text-[#254f5a] font-bold">Target: </span>
            <span className="text-[#a81616]">Thưa quý vị và các bạn, trong những năm qua, phong trào nông dân thi đua sản xuất kinh doanh giỏi giảm nghèo bền vững luôn làm các cấp hội nông dân quan tâm tổ chức thực hiện.</span>
          </p>
          <p className="text-[#254f5a] font-bold">Augmented Audio:</p>
          <AudioPlayer src={AUDIO_PATHS.bt4st.sample1} />
        </div>
      </section>

      <hr className="my-5 h-px bg-gray-200 border-0" />

      <section>
        <h2 className="text-[#11497e] text-2xl border-l-4 border-[#16435f] pl-3 mb-3">
          III. Examples of Model Outputs
        </h2>

        <div className="mb-8">
          <h3 className="text-[#11497e] text-xl mb-3">Case 1</h3>
          <AudioPlayer src={AUDIO_PATHS.vimlp.sample4} />
          <p>
            <span className="text-[#254f5a] font-bold italic">Source Transcription - Muong (Phonetic Transcription in Vietnamese):</span>
            Thái blang tính ca ni cảo khoảng blơng hao lam ba mường ín ủn đét chiếm hai mưn khảo phẩy bải phần trăm dân số.
          </p>
          <p>
            <span className="text-[#254f5a] font-bold">Groundtruth Translation - Vietnamese:</span>
            Trên toàn tỉnh dạo này hiện nay có khoảng hơn 230 nghìn trẻ em chiếm 26,7 phần trăm dân số.
          </p>

          <h4 className="text-[#11497e] text-lg mt-4 mb-2">Model Comparison</h4>
          <p className="bg-[#ecf0f1] p-1 border-l-4 border-[#1d5377] text-sm mb-4">
            <span className="text-[#5e6668] italic">Dataset: </span>ViMLP
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr>
                  <th className="bg-[#5c80c4] text-white border border-gray-300 p-2 text-left">Model</th>
                  <th className="bg-[#5c80c4] text-white border border-gray-300 p-2 text-left">Translation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Groundtruth</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Trên toàn tỉnh dạo này hiện nay có khoảng hơn 230 nghìn trẻ em chiếm 26,7 phần trăm dân số.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Hu-Transformer [1] (re-trained)</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái long tính cao <b>khoảng</b> lương 530 <b>nghìn</b> ủn đét <b>chiếm</b> 20 khẩu phái bài phấn 5 dân chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">w2v2-mbart-LNA</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 tính ca nhi cao <b>khoảng trên</b> 23 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 phấn lâm 5 dân chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">w2v2-mbart-LNA-Adapters</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 tính ca nhi cao <b>khoảng</b> <b>trên</b> 2530 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm 5 dân chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">w2v2-mbart-LNA-Adapters (AVG 5 ckpts)</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 tính ca nhi cao <b>khoảng</b> <b>trên</b> 2530 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm 5 dân chủ.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <h4 className="text-[#11497e] text-lg mt-4 mb-2">Augmentation Comparison</h4>
          <p className="bg-[#ecf0f1] p-1 border-l-4 border-[#1d5377] text-sm">
            <span className="text-[#5e6668] italic">Model: </span>wav2vec-mbart-LNA-Adapters (AVG 5 ckpts)
          </p>
          <p className="bg-[#ecf0f1] p-1 border-l-4 border-[#1d5377] text-sm mb-4">
            <span className="text-[#5e6668] italic">Loss: </span>Weighted Cross Entropy
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse mb-6">
              <thead>
                <tr>
                  <th className="bg-[#5c80c4] text-white border border-gray-300 p-2 text-left">Augmentation Method</th>
                  <th className="bg-[#5c80c4] text-white border border-gray-300 p-2 text-left">Translation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Groundtruth</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Trên toàn tỉnh dạo này hiện nay có khoảng hơn 230 nghìn trẻ em chiếm 26,7 phần trăm dân số.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">No Data Augmentation</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 <b>tính</b> ca nhi cao <b>khoảng trên</b> 2530 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm 5 dân chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Back-translation</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái long <b>tính</b> ca nhi cao <b>khoảng trên</b> 2530 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm 5 dân chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Back-translation + Additive Noise</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái long <b>tính</b> ca nhi cao <b>khoảng hơn</b> 253 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm lâm <b>dân</b> chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Back-translation + Audio Stretching</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái long <b>tính</b> ca <b>này</b> cao <b>khoảng hơn</b> 253 10 <b>nghìn trẻ em chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm <b>dân</b> chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Paraphrase</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 <b>tỉnh</b> ca <b>này có khoảng trên</b> 230 <b>nghìn trẻ em chiếm</b> 26 <b>phần</b> 7 <b>phần</b> lâm <b>dân</b> chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Paraphrase + Additive Noise</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 <b>tỉnh</b> ca nhi cao <b>khoảng trên</b> 2530 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm <b>dân</b> chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Paraphrase + Audio Stretching</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 <b>tỉnh</b> ca nhi cao <b>khoảng trên</b> 2530 <b>nghìn em</b> đét <b>chiếm</b> 20 khẩu phái 7 <b>phần</b> lâm <b>dân</b> chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">BT4ST</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái 5 <b>tỉnh</b> ca <b>này có khoảng hơn</b> 230 <b>nghìn trẻ em chiếm</b> 26 phái 7 <b>phần trăm dân</b> chủ.
                  </td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-300 p-2">
                    <span className="text-[#254f5a] font-bold">Ensemble</span>
                  </td>
                  <td className="border border-gray-300 p-2 text-[#5e6668] italic">
                    Thái <b>toàn tỉnh</b> ca <b>này có khoảng trên</b> 230 <b>nghìn trẻ em chiếm</b> 26 phái 7 <b>phần trăm dân</b> chủ.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div>
            <p className="text-[#254f5a] font-bold">References:</p>
            <ul className="list-disc ml-6">
              <li>[1] Qingkai Fang and Yang Feng. "Back Translation for Speech-to-text Translation Without Transcripts."
                <span className="text-[#5e6668] italic"> Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics, 2023.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ViMLPDemo;