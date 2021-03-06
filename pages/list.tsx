import { BaseLayout } from 'components/Layout/BaseLayout';
import { Text } from 'components/Text';
import faker from 'faker';
import Image from 'next/image';

const data = new Array(10000)
  .fill(null)
  .map((value, index) => ({ id: index, title: faker.lorem.words(5), body: faker.lorem.sentences(4) }));

export default function List() {
  return (
    <BaseLayout>
      <style>{`
      .post{
        background-color: #eee;
        margin: 2rem;
        padding: 1rem;
      }
      .pagination{
        margin: 1rem auto;
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        width: 50%;
      }
      .active{
        border: 1px solid black;
        border-radius: 100%;
        padding: 0 3px;
        outline: none;
      }
      
      `}</style>
      <Text>Long Page</Text>
      {data.map((item) => (
        <div key={item.id} className="post">
          <h3>
            {item.title} - {item.id}
          </h3>
          <p>{item.body}</p>
          <Image width={200} height={300} src="https://picsum.photos/200/300?grayscale" alt="" />
        </div>
      ))}
    </BaseLayout>
  );
}
