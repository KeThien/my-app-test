import React, { Component } from 'react'

export class TakeDateCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">
            <i className="icon-calendar" />
            &nbsp;Réservation en ligne
          </div>
          <div className="card-text" />
          <StartView />
        </div>
      </div>
    )
  }
}

class StartView extends Component {
  state = {
    isShow: true,
    isTypeSelected: false,
    id: null
  }
  typeSelected = id => {
    this.setState({ id, isTypeSelected: true })
    console.log('id selected', id)
  }
  dateSelected = value => {
    console.log('date selected', value)
  }

  render() {
    const { isShow, isTypeSelected } = this.state
    if (isShow === false && isTypeSelected === false) {
      return (
        <button
          type="button"
          className="btn btn-success"
          onClick={() => this.setState({ isShow: true })}
        >
          Prenez rendez-vous
        </button>
      )
    } else if (isShow === true && isTypeSelected === false) {
      return <SelectType handleClick={this.typeSelected} />
    } else if (isShow === true && isTypeSelected === true) {
      return (
        <SelectDate
          handleClick={this.dateSelected}
          handleBack={() => this.setState({ isTypeSelected: false })}
          id={this.state.id}
        />
      )
    }
  }
}

class SelectType extends Component {
  state = {
    id: null,
    praticiens: [
      {
        id: '1',
        name: 'John Conrad',
        categories: [
          {
            id: 4567,
            category: 'Kinesitherapie'
          },
          {
            id: 4568,
            category: 'Ostéopathie'
          },
          {
            id: 4569,
            category: 'DLM'
          }
        ]
      }
    ]
  }
  handleClick = id => {
    this.props.handleClick(id)
  }

  render() {
    const listCategories = this.state.praticiens[0].categories

    return (
      <div>
        <div className="my-3">
          <em>Selectionner la raison de votre visite</em>
        </div>
        <div>
          {listCategories.map(category => (
            <CategoryType
              key={category.id}
              id={category.id}
              name={category.category}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    )
  }
}

class CategoryType extends Component {
  handleClick = id => {
    this.props.handleClick(id)
  }
  render() {
    return (
      <div className="my-1">
        <button
          type="button"
          className="btn btn-info btn-block font-weight-light"
          onClick={() => {
            this.handleClick(this.props.id)
          }}
        >
          {this.props.name}
        </button>
      </div>
    )
  }
}

class SelectDate extends Component {
  state = {
    praticiens: [
      {
        id: '1',
        name: 'John Conrad',
        listServices: [
          {
            id: 4567,
            start: '2019-07-19T09:00',
            end: '2019-07-19T09:45'
          },
          {
            id: 4567,
            start: '2019-07-19T10:00',
            end: '2019-07-19T10:45'
          },
          {
            id: 4568,
            start: '2019-07-20T14:00',
            end: '2019-07-20T14:45'
          },
          {
            id: 4568,
            start: '2019-07-20T15:00',
            end: '2019-07-20T15:45'
          },
          {
            id: 4568,
            start: '2019-07-21T12:00',
            end: '2019-07-21T12:45'
          },
          {
            id: 4568,
            start: '2019-07-21T15:00',
            end: '2019-07-21T15:45'
          },
          {
            id: 4569,
            start: '2019-07-21T09:00',
            end: '2019-07-21T09:45'
          }
        ]
      }
    ]
  }

  backButton() {
    this.props.handleBack()
  }
  render() {
    const listServices = this.state.praticiens[0].listServices.filter(
      service => service.id === this.props.id
    )
    return (
      <div>
        <div className="my-3">
          <em>Réservez une prochaines disponibilités</em>
        </div>
        <div>
          {listServices.slice(0, 3).map((appdate, index) => (
            <AppointmentItem key={index} appdate={appdate} />
          ))}
        </div>
        <button
          type="button"
          className="btn btn-outline-info btn-block font-weight-light"
          onClick={() => {
            this.backButton()
          }}
        >
          Voir toutes les options &#9654;
        </button>
        <button
          type="button"
          className="btn btn-light btn-block font-weight-light text-muted"
          onClick={() => {
            this.backButton()
          }}
        >
          &#9664; Retour
        </button>
      </div>
    )
  }
}
class AppointmentItem extends Component {
  handleClick() {
    console.log('click')
  }
  render() {
    const startDate = new Date(this.props.appdate.start)
    const endDate = new Date(this.props.appdate.end)
    const options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }
    return (
      <div className="my-1">
        <button
          type="button"
          className="btn btn-info btn-block font-weight-light"
          onClick={this.handleClick}
        >
          {startDate.toLocaleDateString('fr-BE', options)} -{' '}
          {endDate.toLocaleTimeString('fr-BE', {
            hour: 'numeric',
            minute: '2-digit'
          })}
        </button>
      </div>
    )
  }
}
export default TakeDateCard
