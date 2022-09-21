import { selectPikachuReduxSagaData, selectPikachuReduxSagaError, selectPikachuReduxSagaIsLoading } from 'pikachu/sm/pikachuSelectors';
import { pikachuActions } from 'pikachu/sm/pikachuSlice';
import Pokemon, { PokemonProps } from 'pokemon/ui/Pokemon';
import { Component } from 'react';
import { connect } from 'react-redux';

type PikachuReduxSagaConnectStateProps = PokemonProps;

interface PikachuReduxSagaConnectDispatchProps {
  startGetPikachu: typeof pikachuActions.startGetPikachu;
}

type PikachuReduxSagaConnectProps = PikachuReduxSagaConnectStateProps & PikachuReduxSagaConnectDispatchProps;

class PikachuReduxSagaConnect extends Component<PikachuReduxSagaConnectProps> {
  componentDidMount() {
    this.props.startGetPikachu();
  }

  render() {
    const { data, error, isLoading, isFetching } = this.props;

    return (
      <div>
        <h2>Redux Saga Connect</h2>
        <Pokemon
          data={data}
          error={error}
          isLoading={isLoading}
          isFetching={isFetching}
        />
      </div>
    );
  }
}

export default connect<PikachuReduxSagaConnectStateProps, PikachuReduxSagaConnectDispatchProps, {} , root.State>(
  (state) => ({
    data: selectPikachuReduxSagaData(state),
    error: selectPikachuReduxSagaError(state),
    isLoading: selectPikachuReduxSagaIsLoading(state),
    // NOTE: There's no equivalent immediate API in imperative RTK Query selectors API. We'll have to write our own logic.
    isFetching: false,
  }),
  {
    startGetPikachu: pikachuActions.startGetPikachu,
  },
)(PikachuReduxSagaConnect);
