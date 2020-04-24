import dash_to_react
import dash
import dash_html_components as html

app = dash.Dash(__name__)

app.layout = html.Div([
    dash_to_react.TicTacToe(
        id='tictactoe'
    )
])

if __name__ == '__main__':
    app.run_server(debug=True)
