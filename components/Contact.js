Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {

    return (
        <div className="contactItem">
          <img className="contactImage" src="https://www.foxvalleycu.com/images/ico-person.png"/>
          <p className="contactLabel">Imię:{this.props.item.firstName}</p>
          <p className="contactLabel">Nazwisko:{this.props.item.lastName}</p>
          <a className="contactEmail" href={this.props.item.email}>{this.props.item.email}</a>
        </div>
        )
      }
});