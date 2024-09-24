import { fireEvent, render, screen } from "@testing-library/react-native";
import { PaperProvider } from "react-native-paper";
import useModalJoinSplitViewModel from "./ViewModel";
import ModalJoinSplit from ".";

jest.useFakeTimers();
jest.mock("./ViewModel");
describe("ModalJoinSplit", () => {
  const DEFAULT_CODE = "s".repeat(36);
  let handleCodeMock = jest.fn();
  let handleJoinMock = jest.fn();

  const mockViewModel = (state: { isLoading: boolean; code: string }) => {
    jest.clearAllMocks();
    jest.mocked(useModalJoinSplitViewModel).mockReturnValue({
      state,
      handlers: {
        handleCodeChange: handleCodeMock,
        handleJoin: handleJoinMock,
      },
    });
  };

  beforeEach(() => {
    
    mockViewModel({ isLoading: false, code: DEFAULT_CODE });
  });

  it("should render correctly when visible", () => {
    render(
      <PaperProvider>
        <ModalJoinSplit visible setVisible={jest.fn()} />
      </PaperProvider>
    );

    expect(screen.getByText(/Participar/)).toBeTruthy();
    expect(screen.getByText(/Insira o ID do pagamento no qual deseja ingressar/)).toBeTruthy();
    expect(screen.queryAllByText(/Código/)).not.toHaveLength(0);
    expect(screen.getByText(/Ingressar/)).toBeTruthy();
  });

  it("should not render when not visible", () => {
    render(
      <PaperProvider>
        <ModalJoinSplit visible={false} setVisible={jest.fn()} />
      </PaperProvider>
    );

    expect(screen.queryByText(/Participar/)).toBeFalsy();
    expect(screen.queryByText(/Insira o ID do pagamento no qual deseja ingressar/)).toBeFalsy();
    expect(screen.queryAllByText(/Código/)).toHaveLength(0);
    expect(screen.queryByText(/Ingressar/)).toBeFalsy();
  });

  it("should call handleCodeChange when input changes", () => {
    render(
      <PaperProvider>
        <ModalJoinSplit visible setVisible={jest.fn()} />
      </PaperProvider>
    );

    const input = screen.getByDisplayValue(DEFAULT_CODE);
    input.props.onChangeText("newcode");

    expect(handleCodeMock).toHaveBeenCalledWith("newcode");
  });

  it("should call handleJoin when button is pressed", () => {
    render(
      <PaperProvider>
        <ModalJoinSplit visible setVisible={jest.fn()} />
      </PaperProvider>
    );

    const button = screen.getByText(/Ingressar/);
    fireEvent.press(button);

    expect(handleJoinMock).toHaveBeenCalled();
  });
  
  it("should disable button when code is not 36 characters long", () => {
    mockViewModel({isLoading: false, code: 'not36characters'});
    render(
      <PaperProvider>
        <ModalJoinSplit visible setVisible={jest.fn()} />
      </PaperProvider>
    );
    
    const button = screen.getByText(/Ingressar/);
    fireEvent.press(button);
  
    expect(handleJoinMock).not.toHaveBeenCalled();
  });

});
