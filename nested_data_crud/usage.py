import dash
import dash_html_components as html
from nested_data_crud import NestedDataCRUD

app = dash.Dash(__name__)

app.layout = html.Div([
    NestedDataCRUD(
        id='my-nested-data-crud',
        dataSource=[],
    )
])

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)