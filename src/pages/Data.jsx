import React from 'react';

const ViMLPDataset = () => {
    const datasetStats = [
        {
            split: 'train',
            hours: 10,
            sentences: 3348,
            speakers: 3,
            words: '165.7K'
        },
        {
            split: 'dev',
            hours: 0.67,
            sentences: 229,
            speakers: 3,
            words: '11.4K'
        },
        {
            split: 'test',
            hours: 1,
            sentences: 347,
            speakers: 3,
            words: '17.1K'
        }
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-2xl font-bold mb-6">ViMLP Dataset Statistics</h1>

                    <div className="space-y-8">

                        <section>
                            <h2 className="text-xl font-semibold mb-4">Dialect Information</h2>
                            <p className="text-gray-700 mb-4">
                                The primary dialect used in the ViMLP dataset is Muong Bi, an important branch of the Muong language.
                                This dialect is characteristic of the Tan Lac district in Hoa Binh province, with distinctive phonetic
                                and lexical features that sometimes differ significantly from other Muong dialects such as Muong Vang
                                or Muong Ong.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-xl font-semibold mb-4">Basic Statistics</h2>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-200 p-2 text-left">Split</th>
                                            <th className="border border-gray-200 p-2 text-left">Audio Hours</th>
                                            <th className="border border-gray-200 p-2 text-left">Sentences</th>
                                            <th className="border border-gray-200 p-2 text-left">Speakers</th>
                                            <th className="border border-gray-200 p-2 text-left">Words</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {datasetStats.map((stat) => (
                                            <tr key={stat.split}>
                                                <td className="border border-gray-200 p-2">{stat.split}</td>
                                                <td className="border border-gray-200 p-2">{stat.hours}</td>
                                                <td className="border border-gray-200 p-2">{stat.sentences}</td>
                                                <td className="border border-gray-200 p-2">{stat.speakers}</td>
                                                <td className="border border-gray-200 p-2">{stat.words}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>


                        <section>
                            <h2 className="text-xl font-semibold mb-4">Speaker Distribution</h2>
                            <p className="text-gray-700 mb-4">
                                The audio data was collected from three Muong editors with a male:female ratio of 1:2. The duration
                                ratio between the three speakers (male:female_1:female_2) is 4:3:3.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-xl font-semibold mb-4">Data Distribution Characteristics</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-semibold mb-2">Audio Duration Distribution</h3>
                                    <p className="text-gray-700">
                                        Most audio segments in the dataset range from 0 to 20 seconds, with the highest concentration
                                        around 10 seconds. The number of segments decreases significantly as duration increases, with
                                        very few segments exceeding 20 seconds. This indicates that the majority of the audio data
                                        consists of relatively short segments that are easier for models to process.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-2">Translation Length Distribution</h3>
                                    <p className="text-gray-700">
                                        The sentence length distribution shows that most sentences in the dataset contain between 10
                                        and 60 words, peaking at around 30 words. There are very few sentences exceeding 150 words.
                                        This indicates that the dataset primarily consists of short to medium-length sentences,
                                        suitable for natural language processing systems.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViMLPDataset;