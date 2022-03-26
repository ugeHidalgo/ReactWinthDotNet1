import { useForm } from 'react-hook-form';
import { Page } from './Page';
import {
  FieldContainer,
  FieldInput,
  Fieldlabel,
  FieldSet,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
} from './Styles';

//For React-hook-form use
interface IFormData {
  title: string;
  content: string;
}

export const AskPage = () => {
  const { register } = useForm<IFormData>();
  return (
    <Page title="Ask a question">
      <form>
        <FieldSet>
          <FieldContainer>
            <Fieldlabel htmlFor="title">Title</Fieldlabel>
            <FieldInput {...register('title')} id="title" type="text" />
          </FieldContainer>
          <FieldContainer>
            <Fieldlabel htmlFor="content">Content</Fieldlabel>
            <FieldTextArea {...register('content')} id="content" />
          </FieldContainer>
          <FormButtonContainer>
            <PrimaryButton type="submit">Submit your question</PrimaryButton>
          </FormButtonContainer>
        </FieldSet>
      </form>
    </Page>
  );
};

//To be loaded with lazy loading
export default AskPage;
